import React,{useState} from "react";
import { Select, Typography, Row, Col, Avatar, Card } from "antd";
import moment from "moment";
import { useGetCryptosQuery } from '../services/cryptoApi';
import { useGetCryptosNewsQuery } from "../services/cryptoNewsApi";
const { Text, Title } = Typography;
const { Option } = Select;
const News = ({ simplified }) => {
  const [newsCategory,setNewsCategory]=useState('Cryptocurrency')
  const demoImage =
    "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News";

  const count = simplified ? 6 : 10;
  const { data: cryptoNews } = useGetCryptosNewsQuery({newsCategory
  });
  const {data}=useGetCryptosQuery(100);
  console.log(cryptoNews);
  console.log(simplified);

  if (!cryptoNews?.value) return "Loading....";
  const ans = cryptoNews?.value.slice(0, count);
  return (
    <>
    
      <Row gutter={[24, 24]}>
        {!simplified && (
          <Col span={24}>
            <Select showSearch
            className="select-news"
            placeholder="Select a crypto"
            optionFilterProp="children"
            onChange={(value)=>setNewsCategory(value)}
            filterOption={(input,option)=>option.children.toLowerCase().indexOf(input.toLowerCase())>=0}
            >
              <Option value="Cryptocurrency">Cryptocurrency</Option>
              {data?.data?.coins.map((coin) => <Option value={coin.name}>{coin.name}</Option>)}
            

            </Select>
          </Col>
        )}
        {ans.map((news, i) => (
          <Col xs={24} sm={12} lg={8} key={i}>
            <Card size="small" hoverable className="news-card">
              <a href={news.url} target="_blank" rel="noreferrer">
                <div className="news-image-container">
                  <Title className="news-title" level={5}>
                    {" "}
                    {news.name > 5
                      ? `${news.name.substring(0, 5)},...`
                      : news.name}
                  </Title>
                  <img
                    className="news-img"
                    src={news?.image?.thumbnail?.contentUrl || demoImage}
                    alt="News"
                  />
                </div>
                <p>
                  {news.description > 100
                    ? `${news.description.substring(0, 97)}...`
                    : news.description}
                </p>
                <div className="provider-container">
                  <div>
                    <Avatar
                      src={news?.image?.thumbnail?.contentUrl || demoImage}
                      alt=""
                    />
                    <Text className="provider-name">
                      {news.provider[0]?.name}
                    </Text>
                  </div>
                  <Text>
                    {moment(news.datePublished).startOf("ss").fromNow()}
                  </Text>
                </div>
              </a>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default News;
