const { log } = console;

// 按位非，原理： 二进制取反 - 1， 如 25 = 0001 1001  => 1110 0110  => 1110 0101 => 0001 1010 => -26 
log(~25)  // -26
//等于 取反-1
log(-25 - 1)  // -26

// 按位与 原理： 
//(0001 1001  &  
// 0000 0011) => 0000 0001 => 1, 都为1才为1，否则为0
log(25 & 3) // 1

// 按位或 原理： 
//(0001 1001  | 
// 0000 0011) => 0001 1011 => 27, 都为0才为0，否则为1
log(25 | 3) // 27

// 按位异或 原理： 
//(0001 1001  ^ 
// 0000 0011) => 0001 1010 => 26, 相同则为0，相反则为1
log(25 ^ 3) // 26

// 左移 原理：0011 向左移5位  => 0011 0000 0 => 96
log(3 << 5) // 96
log(-3 << 5) // -96

// 有符号右移 往前补零,删除后面的位数，如删除0 0011,剩余000，补0得到0000 0000  原理：0000 0011 => 0000 0000 => 0
log(3 >> 5) // 0
log(-64 >> 5) // -2   
log(-3 >> 5) // -1   ？？？？？？？？？？？？？？

// 无符号右移
log(-64 >>> 5) // 134217726
log(3 >>> 5) // 0
