import React, { Component } from 'react';
import axios from 'axios'; // Make sure to import axios

import "./DetailFilm.css";

import { FaPlay } from 'react-icons/fa';

class DetailFilm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filmDetails: []
    };
  }

  componentDidMount = () => {
    const { id } = this.props.match.params; // Get the 'id' from route parameters


    axios.get('./filmDetails.json')
      .then((response) => {
        const filmDetails = response.data.find(detail => detail.ID === parseInt(id));
        if (filmDetails.length > 0) {
          this.setState({ filmDetails: response.data }); // Set the state with the first element
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { filmDetails } = this.state;
    if (filmDetails.length === 0) {
      return <div>No film details available.</div>;
    }

     // Get the first element
    return (
      <div className="container-detail">
        {this.state.filmDetails.map(plan => (
        <div className="detail" key={plan.ID}>
          <div className="image">
            <img
              src={plan.image}
              alt={plan.Name}
              className="img-big"
            />
          </div>
        </div>
        ))}
        <div>
          
          <div className="name-film">{plan.Name}</div>
          <div className="review">
            <div>45p/tập</div>
            <div>Hành động, kịch tính</div>
          </div>
          <div className="decripsion">
            Là bộ phim hành động giả tưởng nên các trận chiến tay đôi cũng được
            chú trọng. Tuy nhiên, do hầu hết nhân vật đều là pháp sư hoặc quái vật
            thích sử dụng xúc tu nên những pha xáp lá cà có phần ít ỏi. Ngược lại,
            pha bay nhảy chất lượng xuất hiện nhiều ở Cuộc Chiến Xuyên Không. Ngày
            nay, có lẽ, cái nôi Trung Quốc phải học tập Hàn Quốc về việc quay cảnh
            bay thế nào cho đẹp mắt.
          </div>
          <div className="more">
            watch more
          </div>
          <div className="Episodes">
              <button type="button" > 2</button>
              <button type="button" > 3</button>
              <button type="button" > 4</button>
              <button type="button" > 5</button>
              <button type="button" > 6</button>
              <button type="button" > 7</button>

          </div>
          <div className="watch">
              <input className="fa-play" type="submit" value="watch now"/>
          </div>
        </div>
      </div>
    );
  }
}

export default DetailFilm;