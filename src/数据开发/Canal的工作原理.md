## **Canal的工作原理**

### MySql主备复制原理

- MySql master将数据变更写入二进制文件（binary log，其中记录叫做二进制日志事件binary log events）
- MySql slave将master的binary log events拷贝到它的中继日志relay log

- MySql slave重放relay log中事件，将数据变更反映自己的数据

### Canal工作原理

- Canal**模拟MySql slave的交互协议**，伪装自己为MySql slave，向MySql master发送dump协议

- MySql mater收到dump请求，开始推送binary log给slave即Canal

- canal解析binary log对象（原始为byte流）