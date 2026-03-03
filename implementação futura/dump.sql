CREATE SCHEMA `gerenciador_pranchas` ;

CREATE TABLE `gerenciador_pranchas`.`prancha` (
  `idpranchas` INT NOT NULL AUTO_INCREMENT,
  `assinatura_shaper` VARCHAR(225) NULL,
  `numero_id` INT NULL,
  `dimensoes_completas` INT NULL,
  `data_fabricacao` DATE NULL,
  PRIMARY KEY (`idpranchas`));

ALTER TABLE `gerenciador_pranchas`.`prancha` 
ADD COLUMN `aitvo` INT NULL DEFAULT 1 AFTER `data_fabricacao`;
