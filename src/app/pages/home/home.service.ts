import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';
import { Response } from '../../models';
import { getUserInterests, addInterests, getUsers, requestConnection, getSentConnections, deleteSentConnections, getReceivedConnections, approveConnection, deleteReceivedConnection, getUserConnections, deleteInterest } from '../../api/user';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
    private http: HttpClient,
    private cookieService: CookieService
  ) { }

  
  // ############COMPONENT INTERACTION############# //
  
  // Observables
  private requestAnnouncedSource = new Subject<boolean>();
  private requestApprovedSource = new Subject<boolean>();
  private requestCancelledSource = new Subject<boolean>();
  private pendingCancelledSource = new Subject<boolean>();
  private interestDeletedSource = new Subject<boolean>();

  // Observable streams
  requestAnnounced$ = this.requestAnnouncedSource.asObservable();
  requestApproved$ = this.requestApprovedSource.asObservable();
  requestCancelled$ = this.requestCancelledSource.asObservable();
  pendingCancelled$ = this.pendingCancelledSource.asObservable();
  interesDeleted$ = this.interestDeletedSource.asObservable();

  // Service commands
  announceRequest() {
    this.requestAnnouncedSource.next(true);
  }

  announceApproveRequest() {
    this.requestApprovedSource.next(true);
  }

  announceCancelRequest() {
    this.requestCancelledSource.next(true);
  }

  announceCancelPending() {
    this.pendingCancelledSource.next(true);
  }

  announceDeleteInterest() {
    this.interestDeletedSource.next(true);
  }

  // ############################################## //


  // API CALLS
  getUserInterests() {
    return this.http.get<Response>(getUserInterests, {withCredentials: true});
  }

  addInterest(interests) {
    return this.http.post<Response>(addInterests, {interests}, {withCredentials: true});
  }

  deleteInterest(interestID) {
    return this.http.delete<any>(deleteInterest(interestID), {withCredentials: true});
  }

  getUsers() {
    return this.http.get<Response>(getUsers, {withCredentials: true});
  }

  sendRequest(connectionID) {
    return this.http.post<Response>(requestConnection(connectionID), {}, {withCredentials: true});
  }

  getSentConnections() {
    return this.http.get<any>(getSentConnections, {withCredentials: true});
  }

  getReceivedConnections() {
    return this.http.get<any>(getReceivedConnections, {withCredentials: true});
  }

  deleteSentRequest(connectionID) {
    return this.http.delete<any>(deleteSentConnections(connectionID), {withCredentials: true});
  }

  deletePendingRequest(userID) {
    return this.http.delete<any>(deleteReceivedConnection(userID), {withCredentials: true});
  }

  approveRequest(userID) {
    return this.http.put<any>(approveConnection(userID), {}, {withCredentials: true});
  }

  getUserConnections() {
    return this.http.get<any>(getUserConnections, {withCredentials: true});
  }
 }
