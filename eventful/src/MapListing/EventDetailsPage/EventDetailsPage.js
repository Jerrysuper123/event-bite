import HashTagComponent from "./HashTagComponent/HashTagComponent";
import "./style.css";

export default function EventDetailsPage(props) {
  return (
    <div
      className="modal fade"
      id="moreInfoModel"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-sm modal-md modal-lg modal-xl">
        <div className="modal-content">
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
          <img src={props.data.eventImage} alt={props.data.title} />
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              {props.data.title}
            </h5>
          </div>

          <div className="modal-body">
            <p>{props.data.category}</p>
            <p
              style={{
                color: props.data.brandColor,
              }}
            >
              {props.data.organizer}
            </p>
            <p>{props.data.startDateTime}</p>
            <p>{props.data.endDateTime}</p>
            <p>
              {props.data.address} Singapore {props.data.postalCode}
            </p>
            <p>{props.data.descriptionSummary}</p>
            <p>{props.data.description}</p>
            <p>
              The Salvation Army (TSA) is a Protestant Christian church and an
              international charitable organisation. The organisation reports a
              worldwide membership of over 1.7 million,[3] consisting of
              soldiers, officers and adherents collectively known as
              Salvationists. Its founders sought to bring salvation to the poor,
              destitute, and hungry by meeting both their "physical and
              spiritual needs". It is present in 132 countries,[4] running
              charity shops, operating shelters for the homeless and disaster
              relief, and humanitarian aid to developing countries. The theology
              of the Salvation Army is derived from the Methodist, although it
              is distinctive in institution and practice. A distinctive
              characteristic of the Salvation Army is its use of titles derived
              from military ranks, such as "lieutenant" or "major". It does not
              celebrate the rites of Baptism and Holy Communion. However, the
              Army's doctrine is otherwise typical of holiness churches in the
              Wesleyan–Arminian tradition. The Army's purposes are "the
              advancement of the Christian religion ... of education, the relief
              of poverty, and other charitable objects beneficial to society or
              the community of mankind as a whole".[5] The Army was founded in
              1865 in London by one-time Methodist preacher William Booth and
              his wife Catherine as the East London Christian Mission, and can
              trace its origins to the Blind Beggar tavern. In 1878, Booth
              reorganised the mission, becoming its first General and
              introducing the military structure which has been retained as a
              matter of tradition.[6] Its highest priority is its Christian
              principles. The current international leader of The Salvation Army
              and chief executive officer (CEO) is General Brian Peddle, who was
              elected by the High Council of The Salvation Army on 3 August 201
            </p>
            <p>
              The Salvation Army (TSA) is a Protestant Christian church and an
              international charitable organisation. The organisation reports a
              worldwide membership of over 1.7 million,[3] consisting of
              soldiers, officers and adherents collectively known as
              Salvationists. Its founders sought to bring salvation to the poor,
              destitute, and hungry by meeting both their "physical and
              spiritual needs". It is present in 132 countries,[4] running
              charity shops, operating shelters for the homeless and disaster
              relief, and humanitarian aid to developing countries. The theology
              of the Salvation Army is derived from the Methodist, although it
              is distinctive in institution and practice. A distinctive
              characteristic of the Salvation Army is its use of titles derived
              from military ranks, such as "lieutenant" or "major". It does not
              celebrate the rites of Baptism and Holy Communion. However, the
              Army's doctrine is otherwise typical of holiness churches in the
              Wesleyan–Arminian tradition. The Army's purposes are "the
              advancement of the Christian religion ... of education, the relief
              of poverty, and other charitable objects beneficial to society or
              the community of mankind as a whole".[5] The Army was founded in
              1865 in London by one-time Methodist preacher William Booth and
              his wife Catherine as the East London Christian Mission, and can
              trace its origins to the Blind Beggar tavern. In 1878, Booth
              reorganised the mission, becoming its first General and
              introducing the military structure which has been retained as a
              matter of tradition.[6] Its highest priority is its Christian
              principles. The current international leader of The Salvation Army
              and chief executive officer (CEO) is General Brian Peddle, who was
              elected by the High Council of The Salvation Army on 3 August 201
            </p>
            <h4>tags:</h4>
            <div>
              {props.data.hashtags
                ? props.data.hashtags.map((tag) => {
                    return <HashTagComponent key={props.data._id} tag={tag} />;
                  })
                : null}
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
