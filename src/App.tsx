import { Button, Tag, DatePicker, Radio, Checkbox, theme } from 'antd'
import 'antd/dist/reset.css'
import './App.css'

function App() {
  const { token } = theme.useToken()

  return (
    <div>
      <Tag color="success">success</Tag>
      <Tag color="processing">processing</Tag>
      <Tag color="error">error</Tag>
      <Tag color="warning">warning</Tag>
      <Tag color="default">default</Tag>

      <DatePicker />

      <Radio checked>Radio</Radio>
      <Checkbox checked>Checkbox</Checkbox>

      <div
        style={{
          backgroundColor: token.colorPrimary,
          width: '100px',
          height: '100px',
        }}
      ></div>
    </div>
  )
}

export default App
