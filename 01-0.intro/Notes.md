# 预习笔记

        /*加法*/
        alert('1'+10);
        /* 
            *加号两侧只要有一个字符串String类型，作为拼接进行操作
            加号两侧只要有一个NaN，结果必定为NaN
            加号两侧都是数值Number类型，作为正常加进行操作
            加号两侧只要有一个null\undefined\boolean，
                会先使用number()函数转换，
                结果为0则相当于加0，结果为NaN则结果为NaN
                number(null) = 0
        */
        var result = '1' + 2 + 3;
        alert(result);
        //分步：'1' + 2 + 3 => '1' + string(2) => '12' + string(3) = '123'

        /*减法*/
        /*
            减号两侧只要有一个NaN，结果必定为NaN
            减号两侧都是数值Number类型，作为正常加进行操作
            减号两侧只要有一个null\undefined\boolean，
                会先使用number()函数转换，
                结果为0则相当于加0，结果为NaN则结果为NaN
        */

        /*隐式转换*/
        /*
            在运算符左右的操作变量自动转变类型，称为隐式转换
            参考ECMAScript
            
        */