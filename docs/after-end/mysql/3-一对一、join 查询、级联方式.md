# 一对一、join 查询、级联方式

## JOIN ON

多表关联查询

```SQL
SELECT user.id, name, id_card.id as card_id, card_name
    FROM user
    JOIN id_card ON user.id = id_card.user_id;

-- 等于

SELECT user.id, name, id_card.id as card_id, card_name
    FROM user
    INNER JOIN id_card ON user.id = id_card.user_id;
```

## LEFT JOIN ON

额外返回左表中没有关联上的数据

```SQL
SELECT user.id, name, id_card.id as card_id, card_name
    FROM user
    LEFT JOIN id_card ON user.id = id_card.user_id;
```

## RIGHT JOIN ON

额外返回右表中没有关联上的数据

```SQL
SELECT user.id, name, id_card.id as card_id, card_name
    FROM user
    RIGHT JOIN id_card ON user.id = id_card.user_id;
```

## 多表删除和更新时的级联操作

### 1.RESTICT (默认)

只有没有从表的关联记录时，才允许删除主表记录或者更新主表记录的主键 `id` 。

### 2.NO ACTION

在 `mysql` 里面 ` NO ACTION` 等同于 `RESTRICT` 。

### 3.CASCADE

主表主键更新，从表关联记录的外键跟着更新，主表记录删除，从表关联记录删除。

### 4.SET NULL

主表主键更新或者主表记录删除，从表关联记录的外键设置为 `null` 。
