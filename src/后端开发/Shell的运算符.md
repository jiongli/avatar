## **Shell的运算符**

### 算数运算符

- +， -，*，/，%，=

- expr是表达式计算工具，使用它能完成表达式的求值操作
- 表达式和运算符之间要有空格

```shell
#!/bin/bash
val=`expr 2 + 2`
echo "两数之和为 : $val"
```

### 逻辑运算符

| 运算符 | 说明   |
| ------ | ------ |
| -a     | 与     |
| -o     | 或     |
| !      | 非     |
| &&     | 短路与 |
| \|\|   | 短路或 |

- 多重测试

  > [ -z $name ] && echo true || echo false
