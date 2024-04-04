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
        Type your text and we'll handle the commas, semicolons, and more for a perfect word cloud.
        </Text>
        <Button variant="primary" onClick={onClick} stretch> // 4.7 创建一个按钮组件，点击事件为onClick函数
          start
        </Button>
      </Rows>
    </div>
  );
};

// 5. 使用d3-cloud生成词云
const generateWordCloud = (words) => { // 5.1 定义generateWordCloud函数，参数为词汇数组
  const layout = d3Cloud() // 5.2 创建一个新的词云布局
    .size([500, 500]) // 5.3 设置词云的大小
    .words(words.map((d) => ({ text: d }))) // 5.4 设置词云的词汇
    .padding(5) // 5.5 设置词汇之间的间距
    .rotate(() => ~~(Math.random() * 2) * 90) // 5.6 设置词汇的旋转角度
    .fontSize(20) // 5.7 设置词汇的字体大小
    .on("end", draw); // 5.8 当布局完成时，调用draw函数来绘制词云

  layout.start(); // 5.9 开始生成词云布局

  function draw(words) { // 5.10 定义draw函数，参数为词汇数组
    // 在这里，你需要使用D3或其他库来绘制词云
    // 例如，你可以创建一个SVG元素，然后为每个词汇创建一个text元素
  }
};