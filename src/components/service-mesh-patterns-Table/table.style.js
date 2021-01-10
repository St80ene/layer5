import styled from "styled-components";
import theme from "../../theme/app/themeStyles";

export const TableWrapper = styled.div`
    table{
        border-collapse:collapse; 
        box-shadow:0px 2px 16px rgba(0,0,0,0.2);

        td{
            padding:0.5rem;
            border-collapse:collapse;
        }

        th{
            background:${theme["tertiaryColor"]};
            color:${theme["white"]};
            padding:10px;
            border-collapse:collapse;

            :first-child{
                    border-top-left-radius:0.5rem;
                }

            :last-child{
                border-top-right-radius:0.5rem;
            }

            a{
                color:${theme["shadowLightColor"]};

                &:hover{
                    color:#ccc;
                }
            }
        }

        tbody{
            tr{
                border-bottom:1px solid #e0e0e0;

                &:hover{
                    box-shadow: 0px 2px 15px -10px black;
			        transform: translateY(0px);
                }
            }

            .bold{
            font-weight:650;
            background:${theme["secondaryColor"]};
            color:${theme["tertiaryColor"]};
            }
        }
    }
`;