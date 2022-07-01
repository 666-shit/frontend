import http from "../http-common";
class ElderService {
    getAll() {
        return http.get("/elders");
    }
    get(id) {
        return http.get(`/elders/${id}`);
    }
    create(data) {
        return http.post("/elders", data);
    }
    update(id, data) {
        return http.put(`/elders/${id}`, data);
    }
    delete(id) {
        return http.delete(`/elders/${id}`);
    }
    deleteAll() {
        return http.delete(`/elders`);
    }
    findByEid(eid) {
        return http.get(`/elders?eid=${eid}`);
    }
}
export default new ElderService();
