## **Zookeeper的选举机制**

- 有一个主节点leader和多个follower，每个节点的配置文件中都有一个独一无二的id

### 集群初次启动时的选举流程

1. 第一台机器（id=1）启动，发现没有leader，进入投票模式，投自己，并收到自己投的这1票，得1票，不能当选leader（当leader的条件：得到集群机器数量过半的票数）
2. 第2台机器（id=2）启动，发现没有leader，进入投票模式，投自己（因为自己的id大于收到的另一台机器的票的id）
3. 第1台机器收到2的票，发现集群中有一个比自己id大的机器上线了，重新投票，投id=2
4. 第2台机器收到的票数为2票，过半数，自己当选，切换模式:leader模式
5. 第1台发现有leader存在了，自己切换为follower模式
6. 第3台启动，发现有leader，自动进入follower模式

### 集群在运行过程中的选举流程

1. 在某个时间点，id=2的机器挂了，其他机器发现没有leader了，全体进入投票模式
2. 先投自己，票中会携带自己的id，自己的数据版本号
3. 都投数据版本最新的节点做leader，如果有多个节点数据版本一样，则从中选id最大的那个作为投票目标