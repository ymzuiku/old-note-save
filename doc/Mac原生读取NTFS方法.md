# Mac原生读取NTFS方法
# 不要使用这个方法!!!
# 这个方法会导致cpu长期高温!!!
在后台会开一个自动加载磁盘的进程,cpu常年占用120%.
# 查看硬盘列表
$`diskutier list`
找到您需要以NTFS格式加载的磁盘名
# 设置某个磁盘为NTFS格式读取
$`sudo nano /etc/fstab`
加入:
`LABEL=磁盘名 none ntfs rw,auto,nobrowse`
- 如果有空格,使用\040代替空格 
- 其中`ntfs rw`标示使用ntfs加载磁盘
- 最后nobrowse非常重要，因为这个代表了在finder里不显示这个分区，这个选项非常重要，如果不打开的话挂载是不会成功的
- 使用ctrl+X, 输入y,保存文件
# 此时Finder不会显示磁盘, 需要设置快捷方式显示磁盘
$`sudo ln -s /Volumes/磁盘名 ~/Desktop/磁盘名`
此后在桌面能看到该磁盘
(如果重插U盘看不到,就需要重启电脑)