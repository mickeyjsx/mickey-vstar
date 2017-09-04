import React from 'react'
import { Form, Input, Button } from 'antd'
import { connect, actions } from 'mickey'

const FormItem = Form.Item

const mapStateToProps = store => ({
  data: store.stars,
})
@connect(mapStateToProps)
@Form.create()
export default class SearchForm extends React.Component {
  handleSubmit = () => {
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const { username, limit, thresh } = values
        if (username && username.trim() && !this.props.data.loading) {
          actions.stars.fetch({ username: username.trim(), limit, thresh })
        }
      }
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form
    const formItemLayout = {
      labelCol: { span: 24 },
      wrapperCol: { span: 24 },
    }

    return (
      <Form>
        <FormItem
          {...formItemLayout}
          label="Github Name"
        >
          {getFieldDecorator('username', { initialValue: this.props.data.username })(
            <Input />,
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Thresh (Only show repos above this threshold)"
        >
          {getFieldDecorator('thresh', { initialValue: this.props.data.thresh })(
            <Input type="number" min="0" />,
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Limit (Only show this many repos)"
        >
          {getFieldDecorator('limit', { initialValue: this.props.data.limit })(
            <Input type="number" min="1" />,
          )}
        </FormItem>
        <FormItem {...formItemLayout}>
          <Button
            type="primary"
            onClick={this.handleSubmit}
            loading={this.props.data.loading}
          >Search</Button>
        </FormItem>
      </Form>
    )
  }
}
