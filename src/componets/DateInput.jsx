import { DatePicker, Form } from "antd";

const TextInput = (props) => {
    return (
        <Form.Item

            name={props.name}
            value={props.value}
            placeholder={props.placeholder}
            onChange={props.onChange}

        >

            <DatePicker style={{ boxSizing: 'border-box', border: '2px solid #A9A9CC', borderRadius: '30px', height: '50px', width: '400px' }}
                name={props.name}
                value={props.value}
                placeholder={props.placeholder}
                onChange={props.onChange}

            />
        </Form.Item>
    )
}
export default TextInput;