import React from 'react'

class Button extends React.Component {
  render() {
    const styleButton = 'inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500';
    return (
        <button
            type="button"
            className={`${styleButton}`}
            >
            {this.props.children}
        </button>
       
      )
  }
}

export default Button;