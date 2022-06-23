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



```python
# https://chromedriver.storage.googleapis.com/index.html下载对应版本chromedriver.exe放到Scripts目录
# 或https://developer.microsoft.com/en-us/microsoft-edge/tools/webdriver/下载对应版本msedgedriver.exe放到Scripts目录

from selenium import webdriver
import ddddocr
import time
import base64


# 图片验证码识别
def yzm_ocr(img):
    ocr = ddddocr.DdddOcr()
    img_bytes = base64.b64decode(img)
    return ocr.classification(img_bytes).lower()


# 系统登录
# driver = webdriver.Chrome()
driver = webdriver.Edge()
Keys = webdriver.common.keys.Keys
By = webdriver.common.by.By
driver.get("http://10.148.0.227:8088/jkm-admin/#/login")
time.sleep(1)
# print(driver.page_source)
driver.find_element(By.NAME, 'username').send_keys('WQFZ_001')
driver.find_element(By.NAME, 'password').send_keys('WQyqfkzhb123')
img = driver.find_element(By.XPATH,'//html//body//div//div//form//div[4]//div//div[2]//img').get_attribute('src').split(',')[1]
yzm_res = yzm_ocr(img)
print(yzm_res)
driver.find_element(By.NAME, 'vdcode').send_keys(yzm_res)
driver.find_element(By.XPATH, '//html//body//div//div//form//button').click()
print(driver.page_source)
```

