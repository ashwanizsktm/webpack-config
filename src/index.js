import { AlertService } from './app/alert.service';
import { ComponentService } from './app/component.service';
import {run} from './app/app';
import "./styles/main.scss";
const alertService = new AlertService();
const componentService = new ComponentService();
run(alertService, componentService);

const env = process.env.NODE_ENV;

const heading = document.querySelector('.env');
heading.textContent = `${env} environment`;

