import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Chip from 'material-ui/Chip';
import { select } from '../reducers/tag';
import styled from 'styled-components';

const Tags = connect(null, { select })(({ select, values }) => (
  <Wrapper>
    {values &&
      values.split(' ').map((tag, index) => (
        <Link key={index} to={`/articles?tag=${tag}`}>
          <ChipWrapper
            label={tag}
            onClick={() => {
              select(tag);
            }}
          />
        </Link>
      ))}
  </Wrapper>
));

const Wrapper = styled.div`
  display: flex;
`;

const ChipWrapper = styled(Chip)`
  margin-right: 5px;
  height: 27px !important;
`;

export default Tags;
