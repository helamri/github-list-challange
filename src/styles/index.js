import styled from "styled-components";

// Styling the repositories grid.
export const ReposStyle = styled.ul`
  padding: 4rem 0;
  display: grid;
  grid-gap: 2rem;
  width: 80rem;
  max-width: 100%;
  margin: 0 auto;
  @media (max-width: 51.875em) {
    padding: 1rem;
  }
`;

export const ItemStyle = styled.li`
  display: flex;
  font-size: 1.3rem;
  border: 1px solid #ccd1d9;
  border-radius: 50px;

  overflow: hidden;
  @media (max-width: 37.5em) {
    flex-direction: column;
    text-align: center;
    align-items: center;
    padding-top: 1rem;
  }
  .owner-avatar {
    width: 120px;
    min-width: 120px;
    @media (max-width: 37.5em) {
      width: 7rem;
      min-width: 7rem;
      border-radius: 50%;
      overflow: hidden;
    }
    img {
      cursor: url(https://img.icons8.com/ios-filled/50/000000/github.png), auto;
      width: 100%;
      vertical-align: top;
      height: 100%;
      object-fit: cover;
    }
  }
  .repo-information {
    display: flex;
    flex-direction: column;
    padding: 1rem 1.9rem;
    .repo-name {
      color: #0366d6;
      margin-bottom: auto;
      text-transform: capitalize;
      cursor: pointer;
      a:hover {
        border-bottom: 2px solid #0366d6;
      }
    }
    .repo-description {
      color: #586069;
      padding: 10px 0;
    }
    .repo-description,
    > div {
      color: #586069;
    }

    > div {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      @media (max-width: 37.5em) {
        justify-content: center;
      }
     
      > div:not(.repo-submitted) {
        margin-right: 30px;
        padding: 5px 0;
        border: solid;
      }
    }
  }
`;

// Styling the loader that apears when we are fetching from github API
export const LoaderStyle = styled.div`
   width: 40px;
  height: 40px;
  margin: 100px auto;
  background-color: #333;

  border-radius: 100%;  
  -webkit-animation: sk-scaleout 1.0s infinite ease-in-out;
  animation: sk-scaleout 1.0s infinite ease-in-out;
  @-webkit-keyframes sk-scaleout {
  0% { -webkit-transform: scale(0) }
  100% {
    -webkit-transform: scale(1.0);
    opacity: 0;
  }
}

@keyframes sk-scaleout {
  0% { 
    -webkit-transform: scale(0);
    transform: scale(0);
  } 100% {
    -webkit-transform: scale(1.0);
    transform: scale(1.0);
    opacity: 0;
  }
`;


