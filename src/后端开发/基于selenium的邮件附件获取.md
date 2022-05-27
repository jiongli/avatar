## **基于selenium的邮件附件获取**

```python
# https://chromedriver.storage.googleapis.com/index.html下载对应版本chromedriver.exe放到Scripts目录
# 或https://developer.microsoft.com/en-us/microsoft-edge/tools/webdriver/下载对应版本msedgedriver.exe放到Scripts目录
from selenium import webdriver
import time


def log_download():
    global driver
    try:
        # 日志下载
        driver = webdriver.Chrome()
        # driver = webdriver.Edge()
        Keys = webdriver.common.keys.Keys
        By = webdriver.common.by.By
        driver.get("https://mail.tjwq.gov.cn/")
        time.sleep(1)
        # print(driver.page_source)
        driver.find_element(By.NAME, 'F_email').send_keys('yangningzgy')
        driver.find_element(By.NAME, 'F_email').send_keys(Keys.TAB)
        driver.find_element(By.NAME, 'F_password').send_keys('********')
        driver.find_element(By.NAME, 'action').click()
        time.sleep(3)
        driver.switch_to.frame('main')
        driver.find_element(By.XPATH, '//*[@title="收件箱"]').click()
        time.sleep(5)
        # driver.find_element(By.XPATH, '//*[@title="接种日志' + time.strftime("%#m.12", time.localtime()) + '"]').click()
        driver.find_element(By.XPATH,'//*[@title="接种日志' + time.strftime("%#m.%#d", time.localtime()) + '"]').click()
        time.sleep(15)
        # target = driver.find_element(By.XPATH,'//html//body//div[1]//table//tbody//tr[2]//td//table//tbody//tr//td[2]//div//div//div[3]//div[7]//div[2]//div[3]//div//div//span[1]//a')
        target = driver.find_element(By.XPATH, '//*[@target="download_frname"]')
        target.click()
        return target.text
    except Exception as e:
        print(e)
        return '【失败】邮件附件下载失败'

```

