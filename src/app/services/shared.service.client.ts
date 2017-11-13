
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';

import { User } from '../objects/user.object';

@Injectable()

export class SharedService {

    baseUrl = environment.baseUrl;

    current_user = null;

    api = {
    }
}