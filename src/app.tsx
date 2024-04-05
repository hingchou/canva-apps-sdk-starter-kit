// 1. 导入必要的库和样式
import { Button, Rows, Text, TextInput } from "@canva/app-ui-kit"; // 1.1 导入Canva的UI组件库
import { addNativeElement } from "@canva/design"; // 1.2 导入Canva的设计元素库
import * as React from "react"; // 1.3 导入React库
import styles from "styles/components.css"; // 1.4 导入样式文件

// 2. 定义App组件
export const App = () => { // 2.1 定义App函数组件
  // 2.2 定义一个状态变量来存储输入框的值
  const [inputValue, setInputValue] = React.useState('');
  // 2.3 定义一个状态变量来存储选中的文件
  const [selectedFile, setSelectedFile] = React.useState<File | null>(null);

  // 3. 定义点击事件处理函数
  const onClick = () => { // 3.1 定义onClick函数
    addNativeElement({ // 3.2 在点击事件中添加一个原生元素
      type: "TEXT", // 3.3 元素类型为文本
      children: [inputValue], // 3.4 元素的内容为输入框的值
    });
  };

  // 3.5 定义一个处理输入框值改变的函数
  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  // 3.6 定义一个处理文件选择的函数
  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFile(event.target.files[0]);
  };

// 3.7 定义一个处理文件上传的函数
const onFileUpload = () => {
  console.log('onFileUpload is called'); // 输出调试信息
  if (selectedFile) {
    const reader = new FileReader();
    reader.onload = (e) => {
      console.log('File is loaded'); // 输出调试信息
      console.log(e.target.result); // 输出文件内容
    };
    reader.onerror = (e) => {
      console.error('File reading error', e); // 输出错误信息
    };
    reader.readAsText(selectedFile);
  } else {
    console.log('No file is selected'); // 输出调试信息
  }
};

  // 4. 返回JSX元素
  return ( // 4.1 返回一个JSX元素
    <div className={styles.scrollContainer}>
      <Rows spacing="2u">
        <Text> 
        Enter your text, leave the rest to us.
        </Text>
        <TextInput value={inputValue} onChange={onInputChange} stretch /> {/* 4.2 在Text和Button之间添加一个TextInput组件 */}
        <input type="file" accept=".csv,.xlsx" onChange={onFileChange} /> {/* 4.3 添加一个文件输入元素，只接受.csv和.xlsx文件 */}
        <Button variant="primary" onClick={onFileUpload} stretch> 
          Upload File
        </Button> {/* 4.4 添加一个按钮，点击时上传文件 */}
        <Button variant="primary" onClick={onClick} stretch> 
          start
        </Button>
      </Rows>
    </div>
  );
};