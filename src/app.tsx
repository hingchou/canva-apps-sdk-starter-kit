// 1. 导入必要的库和样式
import { Button, Rows, Text } from "@canva/app-ui-kit"; // 1.1 导入Canva的UI组件库
import { addNativeElement } from "@canva/design"; // 1.2 导入Canva的设计元素库
import * as React from "react"; // 1.3 导入React库
import styles from "styles/components.css"; // 1.4 导入样式文件

// 2. 定义App组件
export const App = () => { // 2.1 定义App函数组件
  // 3. 定义点击事件处理函数
  const onClick = () => { // 3.1 定义onClick函数
    addNativeElement({ // 3.2 在点击事件中添加一个原生元素
      type: "TEXT", // 3.3 元素类型为文本
      children: ["Hello world!"], // 3.4 元素的内容为"Hello world!"
    });
  };

  // 4. 返回JSX元素
  return ( // 4.1 返回一个JSX元素
    <div className={styles.scrollContainer}> // 4.2 使用样式文件中的scrollContainer样式
      <Rows spacing="2u"> // 4.3 创建一个行组件，间距为2单位
        <Text> // 4.4 创建一个文本组件
          To make changes to this app, edit the <code>src/app.tsx</code> file, // 4.5 文本内容
          then close and reopen the app in the editor to preview the changes. // 4.6 文本内容
        </Text>
        <Button variant="primary" onClick={onClick} stretch> // 4.7 创建一个按钮组件，点击事件为onClick函数
          start // 4.8 按钮的文本为"start"
        </Button>
      </Rows>
    </div>
  );
};