<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20251201145242 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE article (id INT AUTO_INCREMENT NOT NULL, title VARCHAR(255) NOT NULL, summary LONGTEXT DEFAULT NULL, created_at DATETIME NOT NULL, updated_at DATETIME DEFAULT NULL, author_id INT NOT NULL, INDEX IDX_23A0E66F675F31B (author_id), PRIMARY KEY (id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci`');
        $this->addSql('CREATE TABLE bloc (id INT AUTO_INCREMENT NOT NULL, type VARCHAR(50) NOT NULL, title VARCHAR(255) NOT NULL, content LONGTEXT DEFAULT NULL, position INT NOT NULL, article_id INT NOT NULL, INDEX IDX_C778955A7294869C (article_id), PRIMARY KEY (id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci`');
        $this->addSql('CREATE TABLE dataset (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, source VARCHAR(255) NOT NULL, metadata JSON DEFAULT NULL, PRIMARY KEY (id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci`');
        $this->addSql('CREATE TABLE theme (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(100) NOT NULL, colors JSON DEFAULT NULL, font_size VARCHAR(50) DEFAULT NULL, PRIMARY KEY (id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci`');
        $this->addSql('CREATE TABLE visualisation (id INT AUTO_INCREMENT NOT NULL, chart_type VARCHAR(50) NOT NULL, variables JSON DEFAULT NULL, colors JSON DEFAULT NULL, dataset_id INT DEFAULT NULL, bloc_id INT DEFAULT NULL, INDEX IDX_C79C3D88D47C2D1B (dataset_id), UNIQUE INDEX UNIQ_C79C3D885582E9C0 (bloc_id), PRIMARY KEY (id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci`');
        $this->addSql('ALTER TABLE article ADD CONSTRAINT FK_23A0E66F675F31B FOREIGN KEY (author_id) REFERENCES `user` (id)');
        $this->addSql('ALTER TABLE bloc ADD CONSTRAINT FK_C778955A7294869C FOREIGN KEY (article_id) REFERENCES article (id)');
        $this->addSql('ALTER TABLE visualisation ADD CONSTRAINT FK_C79C3D88D47C2D1B FOREIGN KEY (dataset_id) REFERENCES dataset (id)');
        $this->addSql('ALTER TABLE visualisation ADD CONSTRAINT FK_C79C3D885582E9C0 FOREIGN KEY (bloc_id) REFERENCES bloc (id)');
        $this->addSql('ALTER TABLE user DROP username');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE article DROP FOREIGN KEY FK_23A0E66F675F31B');
        $this->addSql('ALTER TABLE bloc DROP FOREIGN KEY FK_C778955A7294869C');
        $this->addSql('ALTER TABLE visualisation DROP FOREIGN KEY FK_C79C3D88D47C2D1B');
        $this->addSql('ALTER TABLE visualisation DROP FOREIGN KEY FK_C79C3D885582E9C0');
        $this->addSql('DROP TABLE article');
        $this->addSql('DROP TABLE bloc');
        $this->addSql('DROP TABLE dataset');
        $this->addSql('DROP TABLE theme');
        $this->addSql('DROP TABLE visualisation');
        $this->addSql('ALTER TABLE `user` ADD username VARCHAR(255) DEFAULT NULL');
    }
}
