import React from 'react';
import { Typography } from 'material-ui';
import styled from 'styled-components';

const Profile = () => (
  <div>
    <Typography type="title">Profile</Typography>
    <Content>
      <p>仕事ではRails使ってます。 家ではjsとか。</p>
      <div>
        <Typography>github</Typography>
        <a href="https://github.com/n-kurasawa">
          https://github.com/n-kurasawa
        </a>
      </div>
      <Section>
        <Typography>twitter</Typography>
        <a href="https://twitter.com/k_7016">https://twitter.com/k_7016</a>
      </Section>
    </Content>
  </div>
);

const Content = styled.div`
  margin-top: 20px;
`;

const Section = styled.div`
  margin-top: 10px;
`;

export default Profile;
