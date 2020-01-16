import React, { Component } from "react";

import Repo from "../components/Repo";
import { Loader } from "../ui/Loader";
import { getThirtyDay } from "../libs/formatDate";
import { ReposStyle } from "../styles";

class Repos extends Component {
  state = {
    repos: [],
    page: 1,
    loading: false
  };

  componentDidMount() {
    this.loadContent();

    this.scrollListener = window.addEventListener("scroll", e => {
      this.handleScroll(e);
    });
  }

  loadContent = async () => {
    const { repos, page } = this.state;

    const url = `https://api.github.com/search/repositories?q=created:>${getThirtyDay()}&sort=stars&order=desc&page=${page}`;
    try {
      const result = await fetch(url);
      const jsonResult = await result.json();

      const reposList = jsonResult.items.map(repo => ({
        id: repo.id,
        avatar: repo.owner.avatar_url,
        owner: repo.owner.login,
        name: repo.name,
        description: repo.description,
        issues: repo.open_issues,
        stars: repo.stargazers_count,
        url: repo.html_url,
        createdAt: repo.created_at
      }));

      this.setState({
        repos: [...repos, ...reposList],

        loading: false
      });
    } catch (e) {
      console.log(e);
    }
  };

  handleScroll = e => {
    const { loading, page } = this.state;
    if (loading) return;
    if (page > 8) return;

    const lastLi = document.querySelector("li:last-child");

    const lastLiOffset = lastLi.offsetTop + lastLi.clientHeight;

    const pageOffset = window.pageYOffset + window.innerHeight;

    const bottomOffest = 20;
    if (pageOffset > lastLiOffset - bottomOffest) this.loadMore();
  };

  loadMore = () => {
    this.setState(
      prevState => ({
        page: prevState.page + 1,

        loading: true
      }),
      this.loadContent
    );
  };

  render() {
    const { repos, loading } = this.state;
    return (
      <ReposStyle>
        {repos.map(repo => (
          <Repo key={repo.id} {...repo} />
        ))}
        {loading && <Loader />}
      </ReposStyle>
    );
  }
}

export default Repos;
