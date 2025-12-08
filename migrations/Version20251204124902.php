<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20251204124902 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE article DROP FOREIGN KEY `FK_23A0E66F675F31B`');
        $this->addSql('ALTER TABLE article ADD CONSTRAINT FK_23A0E66F675F31B FOREIGN KEY (author_id) REFERENCES `user` (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE bloc CHANGE title title VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE visualisation DROP FOREIGN KEY `FK_C79C3D88D47C2D1B`');
        $this->addSql('DROP INDEX IDX_C79C3D88D47C2D1B ON visualisation');
        $this->addSql('ALTER TABLE visualisation ADD config JSON DEFAULT NULL, DROP variables, DROP colors, DROP dataset_id, CHANGE bloc_id bloc_id INT NOT NULL, CHANGE chart_type type VARCHAR(50) NOT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE article DROP FOREIGN KEY FK_23A0E66F675F31B');
        $this->addSql('ALTER TABLE article ADD CONSTRAINT `FK_23A0E66F675F31B` FOREIGN KEY (author_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE bloc CHANGE title title VARCHAR(255) NOT NULL');
        $this->addSql('ALTER TABLE visualisation ADD colors JSON DEFAULT NULL, ADD dataset_id INT DEFAULT NULL, CHANGE bloc_id bloc_id INT DEFAULT NULL, CHANGE type chart_type VARCHAR(50) NOT NULL, CHANGE config variables JSON DEFAULT NULL');
        $this->addSql('ALTER TABLE visualisation ADD CONSTRAINT `FK_C79C3D88D47C2D1B` FOREIGN KEY (dataset_id) REFERENCES dataset (id)');
        $this->addSql('CREATE INDEX IDX_C79C3D88D47C2D1B ON visualisation (dataset_id)');
    }
}
