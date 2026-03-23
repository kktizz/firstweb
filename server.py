#!/usr/bin/env python3
"""
简单的HTTP服务器脚本
用法: python server.py
然后在浏览器访问 http://localhost:8000
"""

import http.server
import socketserver
import os
import webbrowser
from threading import Timer

PORT = 8000
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)
    
    def end_headers(self):
        # 添加CORS头，允许跨域访问
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        super().end_headers()

def start_server():
    with socketserver.TCPServer(("", PORT), MyHTTPRequestHandler) as httpd:
        url = f"http://localhost:{PORT}"
        print(f"✓ 服务器启动成功！")
        print(f"✓ 访问地址: {url}")
        print(f"✓ 按 Ctrl+C 停止服务器")
        print(f"✓ 文件位置: {DIRECTORY}\n")
        
        # 自动打开浏览器
        def open_browser():
            webbrowser.open(url)
        
        Timer(1, open_browser).start()
        
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n✓ 服务器已停止")

if __name__ == "__main__":
    start_server()
