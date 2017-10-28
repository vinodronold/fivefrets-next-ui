import React, { PureComponent } from 'react'
import { bool, string, func, array } from 'prop-types'
import { color } from '../../constants/theme'
import DisplayResult from './DisplayResult'

export default class Search extends PureComponent {
  static propTypes = {
    isSearchOpen: bool.isRequired,
    IsError: bool.isRequired,
    ToggleSearch: func.isRequired,
    CaptureSearchInput: func.isRequired,
    result: array,
    input: string
  }

  render() {
    const { isSearchOpen, input, result, IsError, ToggleSearch, CaptureSearchInput } = this.props
    return (
      <div className={`container ${isSearchOpen ? 'open' : 'closed'}`}>
        <div className={'search'}>
          <input
            type="text"
            value={input}
            placeholder={'Search'}
            onChange={e => {
              !isSearchOpen && ToggleSearch()
              CaptureSearchInput(e.target.value)
            }}
          />
        </div>
        {input && <DisplayResult result={result} IsError={IsError} ToggleSearch={ToggleSearch} />}

        <style jsx>{`
          div.container {
            padding: 4rem;
          }
          div.container.open {
            padding: 2rem;
            position: fixed;
            background-color: ${color.bg(1)};
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            zindex: 12;
            margintop: 3rem;
          }
          div.search {
            text-align: center;
          }
          input {
            background-color: rgba(0, 0, 0, 0);
            border-style: none;
            width: 80%;
            border-bottom: 2px solid #fff;
            color: ${color.primary()};
          }
          input:focus {
            outline: none;
          }
        `}</style>
        <style jsx>{`
          input {
            text-align: ${isSearchOpen ? 'left' : 'center'};
            font-size: ${isSearchOpen ? '4rem' : '2rem'};
          }
        `}</style>
      </div>
    )
  }
}
