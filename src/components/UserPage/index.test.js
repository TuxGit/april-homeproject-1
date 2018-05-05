import React from 'react';
import { shallow, mount } from 'enzyme';
// import { MemoryRouter } from 'react-router';
// import { Switch, Route } from 'react-router-dom';
import { UserPage } from './index';
import Spinner from 'react-svg-spinner';

describe('Компонента UserPage', () => {
  // const wrapper = shallow(<UserPage/>);

  // const wrapper = mount(
  //   <MemoryRouter initialEntries={['/users/me']}>
  //     <Route to="/users/:login" component={UserPage}/>
  //   </MemoryRouter>
  // );
  // const userPanel = wrapper.find(UserPage);

  describe('Содержит методы:', () => {
    const wrapper = shallow(<UserPage/>);

    it('componentDidMount', () => {
      expect(wrapper.instance().componentDidMount).toBeDefined();
      // expect(userPanel.instance().componentDidMount).toBeDefined();
    });
    it('componentDidUpdate', () => {
      expect(wrapper.instance().componentDidUpdate).toBeDefined();
      // expect(userPanel.instance().componentDidUpdate).toBeDefined();
    });
  });

  describe('Загрузка данных:', () => {
    it('присутствует спинер при загрузке (props.isFetching === true)', () => {
      const wrapper = shallow(<UserPage isFetching={true}/>);

      expect(wrapper.find(Spinner)).toHaveLength(1);
    });
    it('пустая разметка при отсутствии пользователя (isFetching === false && user === null)', () => {
      const wrapper = shallow(<UserPage isFetching={false}/>);

      expect(wrapper.html()).toEqual(null);
    });
  });

  describe('Проверка вёрстки, присутствует:', () => {
    const userData = {
      login: 'dex157',
      avatar_url: 'http://test-image',
      followers: -1,
      public_repos: -1
    };
    const wrapper = shallow(<UserPage user={userData}/>);

    it('аватар пользователя', () => {
      expect(wrapper.find('img').prop('src')).toBe(userData.avatar_url);
    });
    it('логин пользователя', () => {
      expect(wrapper.find('h3').text()).toBe(userData.login);
    });
    it('фоловеры пользователя', () => {
      // .get(0) -> ReactElement
      expect(wrapper.find('p').at(0).text()).toBe(`Followers: ${userData.followers}`);
    });
    it('публичные репозитории пользователя', () => {
      expect(wrapper.find('p').at(1).text()).toBe(`Public repos: ${userData.public_repos}`);
    });
  });
});
