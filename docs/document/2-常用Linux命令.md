# 常用 Linux 命令

## 文件操作

### ls - 列出目录内容

```linux
ls
```

### cd - 切换目录

```bash
cd home
```

### pwd - 显示当前工作目录

```bash
pwd
```

### mkdir - 创建新目录

```bash
mkdir newDirectory
```

### rm - 删除文件或目录

```bash
rm newDirectory
```

### cp - 复制文件或目录

```bash
cp source_file destination_file
```

### mv - 移动文件或目录

```bash
mv source_file destination_file
```

### cat - 查看文件内容

```bash
cat file_name
```

### vim - 编辑文件内容

```bash
vim file_name
```

### grep - 在文件中搜索文本

```bash
grep "search_text" file_name
```

### grep -i - 忽略大小写搜索文本

```bash
grep -i "search_text" file_name
```

### find - 在目录中搜索文件

```bash
find directory_path -name "file_name"
```

### find -type - 按类型搜索文件

```bash
find directory_path -type f
```

### find -mtime - 按修改时间搜索文件

```bash
find directory_path -mtime n
```

### locate - 快速定位文件

```bash
locate file_name
```

### wc - 统计文件行数、字数和字节数

```bash
wc file_name
```

### sort - 对文件进行排序

```bash
sort file_name
```

### diff - 比较文件的差异

```bash
diff file1 file2
```

### chmod - 修改文件权限

```bash
chmod permissions file_name
```

### gzip - 压缩文件

```bash
gzip file_name
```

### gunzip - 解压缩文件

```bash
gunzip file_name
```

### gzip -d - 解压缩 .gz 文件

```bash
gzip -d file_name.gz
```

### bzip2 - 压缩文件

```bash
bzip2 file_name
```

### bunzip2 - 解压缩 .bz2 文件

```bash
bunzip2 file_name.bz2
```

### zip -r - 压缩文件和目录为 .zip 文件

```bash
zip -r archive_name.zip file_or_directory
```

### unzip - 解压缩 .zip 文件

```bash
unzip archive_name.zip
```

### tar -xvf - 解压缩 tar 归档文件

```bash
tar -xvf file_name.tar
```

### tar -czvf - 压缩文件和目录

```bash
tar -czvf archive_name.tar.gz file_or_directory
```

### tar -xvzf - 解压缩 tar.gz 归档文件

```bash
tar -xvzf archive_name.tar.gz
```

### wget - 下载文件

```bash
wget file_url
```

### file - 查看文件类型

```bash
file file_name
```

### du - 查看文件和目录大小

```bash
du options file_or_directory
```

### du -sh - 查看目录大小（总计）

```bash
du -sh directory_path
```

## 系统操作

```bash
which command_name
```

### ssh - 远程登录

```bash
ssh username@hostname
```

### top - 监视系统资源

```bash
top
```

### ps - 查看进程状态

```bash
ps
```

### ps aux - 查看详细进程信息

```bash
ps aux
```

### kill - 终止进程

```bash
kill process_id
```

### killall - 终止特定名称的进程

```bash
killall process_name
```

### ifconfig - 查看网络接口配置

```bash
ifconfig
```

### ifconfig interface up/down - 启用/禁用网络接口

```bash
ifconfig interface up
ifconfig interface down
```

### ping - 测试网络连接

```bash
ping hostname
```

### netstat - 查看网络状态

```bash
netstat
```

### iptables - 配置防火墙规则

```bash
iptables options
```

### history - 查看命令历史记录

```bash
history
```

### history -c - 清除命令历史记录

```bash
history -c
```

### df - 查看磁盘空间使用情况

```bash
df
```

### uname - 显示系统信息

```bash
uname -a
```

### date - 显示系统日期和时间

```bash
date
```

### cal - 显示日历

```bash
cal
```

### uptime - 查看系统运行时间

```bash
uptime
```

### free - 查看内存使用情况

```bash
free -h
```

### df -h - 查看磁盘空间使用情况（人类可读格式）

```bash
df -h
```

## 用户操作

### useradd - 创建新用户

```bash
useradd username
```

### usermod - 修改用户属性

```bash
usermod options username
```

### userdel - 删除用户

```bash
userdel username
```

### su - 切换用户

```bash
su username
```

### sudo - 以超级用户权限执行命令

```bash
sudo command
```

### which - 查找命令的路径

### passwd - 修改用户密码

```bash
passwd username
```

### whoami - 查看当前用户名

```bash
whoami
```

### echo - 输出文本

```bash
echo "text"
```
