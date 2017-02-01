#git-hello-world

#设置~/.gitconfig
如果没有此文件使用 $ touch ~/.gitconfig 创建一个
然后加入以下配置文件
```
[user]
    name = ym
    email = ym@qq.com
[color]
    diff = auto
[alias]
    r = reset --hard
    b = branch
    s = status
    c = checkout
    m = merge
    cg = config --global
    cm = commit -am
    cm-no = git commit --no-verify -am
    cmm = commit -am 'quick commit -am'
    pusho = push origin
    pullo = pull origin
    pusha = push --all
    pulla = pull --all
    clone-git = clone git@git.oschina.net:ymdesign/git-hello-world
```

#创建ssh密码：
`$ ssh-keygen -t rsa -C ym@mail.com`

然后打开~/.ssh/id_rsa.pub文件，把里面的秘钥复制到github或者git.oschina.net上的ssh页面

#测试是否联通
`$ ssh -T git@git.oschina.net`

#clone一个项目
`$ git clone git@git.oschina.net:ymdesign/git-hello-world `

#项目根目录创建.gitignore文件，标识哪些文件不需要push
以react-native为例子
```
/node_modules/*
/ios/*
/android/*
```


#分支通用归纳
1. **查看本地和远程分支**
`$ git branch -a`

2. **保存本地分支**
`$ git add .`
`$ git commit -m 'log'`

3. **切换本地分支**
`$ git checkout v1`

4. **提交本地分支到远程**
`$ git push origin <本地分支>:<远程分支>`
`$ git push --all`

5. **获取远程分支**
`$ git pull origin <远程分支>:<本地分支>`
`$ git pull --all`

6. **删除本地分支**
`$ git branch -D <本地分支>`

7. **删除远程分支**
`$ git push -d origin <远程分支>`

8. **放弃本地修改，强制更新**
`$ git reset --hard origin/<远程分支>`

9. **合并目标分支到当前分支**
合并分支的目的是多人协作，只要两个人没有修改过同一个方法就可以快速合并
`$ git merge v1`
如果两个分支修改过同一个方法，就会需要使用合并工具逐步确定需要保留的代码
`$ git mergetool`

#非协作最佳实践
1. clone一个项目
2. 本地常年使用master分支进行开发，其他分支仅仅用于版本回溯。
3. 每次一些比较大的改动就创建一个分支，并且需要详细描述commit
4. 版本号：alpha版本使用v001～099，正式版使用v100，101，102，大版本使用v100，200，300
5. 如果需要回到某个版本使用`$ git reset --hard origin/<远程分支>`覆盖本地master分支
6. 写完代码记得push --all
