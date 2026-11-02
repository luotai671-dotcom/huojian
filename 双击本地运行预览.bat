@echo off
chcp 65001 >nul
cd /d "%~dp0"
title 小火箭测评 - 本地预览服务
echo ========================================================
echo        小火箭测评 (xiaohuojianjc.blog) 本地预览启动器
echo ========================================================
echo.

netstat -ano | findstr :4321 >nul
if %errorlevel% equ 0 (
    echo [提示] 本地预览服务已在运行中，正在为您打开浏览器...
    echo 访问地址: http://localhost:4321/
    start http://localhost:4321/
    echo.
    echo 您可以随时在浏览器中尽情点击浏览全站！
    echo 如需退出，请直接关闭本窗口。
    echo ========================================================
    pause
    exit /b
)

echo 正在启动 Astro 本地全站静态预览服务器...
echo 访问地址: http://localhost:4321/
echo 提示: 服务就绪后浏览器将自动弹出。按 Ctrl+C 可停止预览。
echo.

call npm.cmd run preview -- --open

pause
