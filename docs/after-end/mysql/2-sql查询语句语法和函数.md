# sql 查询语句语法和函数

## 查询语法

- 查询所有列

```SQL
SELECT * FROM student;
```

- 查询指定列

```SQL
SELECT name, score FROM student;
```

- WHERE

```SQL
SELECT * FROM student WHERE age >= 20;
```

- WHERE AND (连接多个条件)

```SQL
SELECT * FROM student WHERE age >= 20 AND score >=80;
```

- LIKE (模糊查询)

```SQL
SELECT * FROM student WHERE name LIKE  '王%';
```

- IN (指定集合)

```SQL
SELECT * FROM student WHERE class IN ('一班', '二班');
```

- NOT IN (指定不在当前集合)

```SQL
SELECT * FROM student WHERE class NOT IN ('一班', '二班');
```

- BETWEEN AND (指定区间)

```SQL
SELECT * FROM student WHERE age BETWEEN 18 AND 20;
```

- LIMIT (分页)

```SQL
SELECT * FROM student LIMIT 0, 5
```

- ORDER BY (指定排序的列)

```SQL
SELECT name, score, age FROM student ORDER BY class asc, age desc;
```

- GROUP BY (指定分组的列)

```SQL
SELECT class as '班级', AVG(score) AS '平均成绩' FROM student GROUP BY class ORDER BY '平均成绩' DESC;
```

- HAVING (分组之后进行过滤)

```SQL
SELECT class,AVG(score) AS avg_score FROM student GROUP BY class HAVING avg_score > 90;
```

- DISTINCT (去重)

```SQL
SELECT DISTINCT class FROM student;
```

## 内置函数

### 聚合函数

- AVG (求平均数)
- COUNT (计数)
- SUM (求和)
- MIN (求最小数)
- MAX (求最大数)

```sql
select avg(score) as '平均成绩',count(*) as '人数',sum(score) as '总成绩',min(score) as '最低分', max(score) as '最高分' from student

```

### 字符串函数

- CONCAT (连接字符串)
- SUBSTR (截取字符串)
- LENGTH (求字符串长度)
- UPPER (转大写)
- LOWER (转小写)

```SQL
SELECT CONCAT('xx', name, 'yy'), SUBSTR(name,2,3), LENGTH(name), UPPER('aa'), LOWER('TT') FROM student;
```

### 数值函数

- ROUND (四舍五入)
- CEIL (向上取整)
- FLOOR (向下取整)
- ABS (求绝对值)
- MOD (取模)

```SQL
SELECT ROUND(1.234567, 2), CEIL(1.234567), FLOOR(1.234567), ABS(-1.234567), MOD(5, 2);
```

### 日期函数

- YEAR (日期取年)
- MONTH (日期取月)
- DAY (日期取天)
- DATE (取年月日)
- TIME (取时间)

```SQL
SELECT YEAR('2023-06-01 22:06:03'), MONTH('2023-06-01 22:06:03'),DAY('2023-06-01 22:06:03'),DATE('2023-06-01 22:06:03'), TIME('2023-06-01 22:06:03');
```

### 条件函数

- IF

```SQL
select name, if(score >=60, '及格', '不及格') from student;
```

- CASE

```SQL
SELECT name, score, CASE WHEN score >=90 THEN '优秀' WHEN score >=60 THEN '良好'ELSE '差' END AS '档次' FROM student;
```

### 其他函数

- NULLIF (如果相等返回 null，不相等返回第一个值)

```SQL
select NULLIF(1,1), NULLIF(1,2);
```

- COALESCE (返回第一个非 null 的值)

```SQL
select COALESCE(null, 1), COALESCE(null, null, 2)
```

- GREATEST (返回几个值中最大的一个)

```SQL
select GREATEST(1,2,3);
-- 3

select greatest(1, '123',3);
-- 3   （'123'是字符串）
```

- LEAST (返回几个值中最小的一个)

```SQL
select LEAST(1,2,3,4);
```

### 类型转换函数

- CAST

```SQL
select greatest(1, cast('123' as signed),3);
-- 123
```

- CONVERT

```SQL
select greatest(1, convert('123', signed),3);
-- 123
```

::: tip 提示
可以转换的类型有这些：

signed：整型；

unsigned：无符号整型

decimal：浮点型；

char：字符类型；

date：日期类型；

time：时间类型；

datetime：日期时间类型；

binary：二进制类型
:::

- DATE_FORMAT

```SQL
SELECT DATE_FORMAT('2022-01-01', '%Y年%m月%d日');
-- 2022年01月01日
```

- STR_TO_DATE

```SQL
SELECT STR_TO_DATE('2023-06-01', '%Y-%m-%d');
-- 2023-06-01
```

### 系统函数

- VERSION
- DATABASE
- UESR

```SQL
select VERSION(), DATABASE(), USER()
```
