# mysql 入门

## 连接数据库

```SQL
mysql -u root -p
```

## mysql 常用数据类型

```SQL
INT：存储整数

VARCHAR(100): 存储变长字符串，可以指定长度

CHAR：定长字符串，不够的自动在末尾填充空格

DOUBLE：存储浮点数

DATE：存储日期 2023-05-27

TIME：存储时间 10:13

DATETIME：存储日期和时间 2023-05-27 10:13
```

## sql 语句分类

### DDL（Data Definition Language）

创建数据库、创建表等修改结构

### DML（Data Manipulate Language）

增删改数据

### DQL（Data Query Language）

查询数据

## sql 操作

- 表创建

```SQL
CREATE TABLE `student` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `name` varchar(45) NOT NULL COMMENT '名字',
  `age` int DEFAULT NULL COMMENT '年龄',
  `sex` int DEFAULT NULL COMMENT '性别',
  `email` varchar(60) DEFAULT NULL COMMENT '邮箱',
  `create_time` datetime NOT NULL COMMENT '创建时间',
  `status` int DEFAULT '0' COMMENT '是否删除',
  PRIMARY KEY (`id`)
) CHARSET=utf8mb4
```

- 表插入数据

```SQL
INSERT INTO `hello-mysql`.`student` (`name`, `age`, `sex`, `email`, `create_time`) VALUES ('bbb', '23', '1', 'bbb@qq.com', '2023-05-27 10:50:00');
```

- 表更新数据

```SQL
UPDATE `hello-mysql`.`student` SET `email` = 'xxx@qq.com' WHERE (`id` = '10');
```

- 表删除数据

```SQL
DELETE FROM `hello-mysql`.`student` WHERE (`id` = '10');
```

- 表查询数据

```SQL
SELECT * FROM `hello-mysql`.student;
```

- 清空表

```SQL
TRUNCATE `hello-mysql`.`student`;
```

- 删除表

```SQL
DROP TABLE `hello-mysql`.`student`;
```


