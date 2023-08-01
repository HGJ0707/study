# mysql 事务和隔离级别

修改多个表的时候，如果表的数据是有关联的，事务是必须的。要不全部成功，要不全部不成功。

## 开启事务

`START TRANSACTION` 开启事务后所有的 `sql` 语句都可以 `ROLLBACK` ，除非执行了 `COMMIT` 完成这段事务。

```SQL
START TRANSACTION
```

## 回退 SQL

```SQL
ROLLBACK
```

## 提交 SQL

```SQL
COMMIT
```

## 回退部分 SQL

可以设置几个 `SAVEPOINT` ，这样可以 `ROLLBACK TO` 任何一个 `SAVEPOINT` 的位置。

```SQL
START TRANSACTION;

SAVEPOINT aaa;

UPDATE order_items SET quantity=1 WHERE order_id=3;

SAVEPOINT bbb;

UPDATE orders SET total_amount=200 WHERE id=3;

SAVEPOINT ccc;
```

回滚到 bbb 的位置：

```SQL
ROLLBACK TO SAVEPOINT bbb;
```

## 事务的隔离级别

MYSQL 有 4 种事务隔离级别：

### 1.READ UNCOMMITTED：可以读到别的事务尚未提交的数据

> 有个问题，这个事务内第一次读的数据是 aaa，下次读可能就是 bbb 了，这个问题叫做不可重复读。万一你读到的数据人家又回滚了，那你读到的就是临时数据，这个问题叫做脏读。

### 2.READ COMMITTED：只读取别的事务已提交的数据

> 不会督读到临时数据，不会存在脏读问题。但是还是可能存在不可重复度的问题。还有可能不只是数据不一样，可能两次读取到的记录行数也不一样，叫幻读。

### 3.REPEATABLE READ：在同一事务内，多次读取数据将保证结果相同。

> 这个级别保证了读取到的数据一样，但是不保证行数一样，也就是说解决了不可重复读的问题，但仍然存在幻读的问题。

### 4.SERIALIZABLE：在同一时间只允许一个事务修改数据。

> 没有问题，但是性能很差。

这 4 种级别主要是数据一致性和性能的差别，一致性越好，并发性能就越差。默认为 `REPEATABLE READ` 级别

查询当前的事务隔离级别：

```SQL
select @@transaction_isolation
```
