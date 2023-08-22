import {  Input, Form } from "antd";

const TextInput2 = (props) => {
    return(
<Form.Item

name={props.name}
value={props.value}
placeholder={props.placeholder}
onChange={props.onChange}

>
<Input
  name={props.name}
  style={{ boxSizing: 'border-box', border: '2px solid #A9A9CC', borderRadius: '30px', height: '50px', width: '818px', textAlign: 'center' }}
  value={props.value}
  placeholder={props.placeholder}
  onChange={props.onChange}
/>
</Form.Item>
    )
}
export default TextInput2;