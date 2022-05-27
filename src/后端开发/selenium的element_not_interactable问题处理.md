## **selenium的element not interactable问题处理**

### 问题记录

- selenium模拟登录输入用户名正常，输入密码报错element not interactable，密码元素click无问题

```python
from selenium import webdriver
from selenium.webdriver.common.by import By
from time import sleep

browser = webdriver.Chrome()
browser.get("https://mail.tjwq.gov.cn/")

browser.find_element(By.NAME,'F_email').send_keys('yangningzgy')
browser.find_element(By.NAME,'F_password').send_keys('123456789WQwq')
browser.find_element(By.NAME,'action').click()
sleep(2)
print(browser.page_source)
```

### 解决过程

- 使用Tab跳转到密码输入框

```python
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from time import sleep

browser = webdriver.Chrome()
browser.get("https://mail.tjwq.gov.cn/")

browser.find_element(By.NAME,'F_email').send_keys('yangningzgy')
browser.find_element(By.NAME,'F_email').send_keys(Keys.TAB)
browser.find_element(By.NAME,'F_password').send_keys('123456789WQwq')
browser.find_element(By.NAME,'action').click()
sleep(2)
print(browser.page_source)
```

