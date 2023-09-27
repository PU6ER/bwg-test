import { IComment, INews } from "@/app/app.interface";
import axios from "axios";
type id = number;
class NewsService {
  private URL = "https://hacker-news.firebaseio.com/v0";
  async getNewsId() {
    return axios.get<Array<id>>(`${this.URL}/newstories.json?print=pretty`);
  }
  async getNewsById(id: string) {
    return axios.get<INews>(`${this.URL}/item/${id}.json`);
  }
  async getCommentsById(id: string) {
    return axios.get<IComment>(`${this.URL}/item/${id}.json`);
  }
}

export default new NewsService();
