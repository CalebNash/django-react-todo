import React from 'react'

class BlogForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title: '',
      checked: 'false'
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  render(){
    return(
      <form className="col-12 col-md-6 mb-5" onSubmit={(event) => this.props.handleSubmit(event, this.state)}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input type="text" className="form-control" id="title" name="title" value={this.state.title} onChange={this.handleChange}/>
        </div>
        <button type="submit" className="btn btn-primary">Save</button>
      </form>
    )
  }
}

export default BlogForm;
