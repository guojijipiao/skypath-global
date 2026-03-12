@echo off
echo ==============================================
echo  正在将代码上传到 GitHub...
echo ==============================================

cd /d "C:\Users\86130\lobsterai\project"

:: 初始化 Git（如果已初始化会自动跳过）
git init

:: 添加所有文件
git add .

:: 提交代码
git commit -m "first commit"

:: 绑定你的 GitHub 仓库
git remote add origin https://github.com/guojijipiao/skypath-global.git

:: 设置主分支
git branch -M main

:: 推送代码到 GitHub
git push -u origin main

echo ==============================================
echo  上传完成！请刷新你的 GitHub 仓库页面。
echo ==============================================
pause