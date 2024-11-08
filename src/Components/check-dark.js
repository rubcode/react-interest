import styled from 'styled-components'
import { IoMdSunny } from "react-icons/io";
import { FaRegMoon } from "react-icons/fa";

const CheckDarkStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    .theme-switch {
      display: inline-block;
      height: 34px;
      position: relative;
      width: 60px;
    }

    .theme-switch input {
      display: none;
    }

    .slider {
      background-color: var(--bg);
      bottom: 0;
      cursor: pointer;
      left: 0;
      position: absolute;
      right: 0;
      top: 0;
      transition: .4s;
    }

    .slider:before {
      background-color: var(--primaryColor);
      bottom: 4px;
      content: "";
      height: 26px;
      left: 4px;
      position: absolute;
      transition: .4s;
      width: 26px;
    }

    input:checked+.slider {
      background-color: var(--greyDarken);
    }

    input:checked+.slider:before {
      transform: translateX(26px);
    }

    .slider.round {
      border-radius: 34px;
    }

    .slider.round:before {
      border-radius: 50%;
    }
    .icon{
        font-size: 1.3rem;
        margin-inline: 0.75rem;
        color: var(--primaryColor);
    }
`

function CheckDark({setTheme}) {
    function handlerChange(e){
        if (e.target.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
            setTheme('ligth')
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            setTheme('dark')
            
        }
    }
    return (
        <CheckDarkStyled>
            <FaRegMoon className='icon'  />
            <label className="theme-switch" htmlFor="checkbox">
                <input type="checkbox" id="checkbox" onChange={handlerChange}/>
                <div className="slider round"></div>
            </label>
            <IoMdSunny className='icon' />
            
  
        </CheckDarkStyled>
    )
}

export default CheckDark
