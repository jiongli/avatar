## **基于ddddocr的图片验证码识别**

- 环境支持

  - python <= 3.9（ddddocr1.4）

- 安装命令

  > pip install ddddocr

```python
import ddddocr

ocr = ddddocr.DdddOcr()
with open('yzm.png', 'rb') as f:
    img_bytes = f.read()
res = ocr.classification(img_bytes)
print(res)
```

