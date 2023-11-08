import React, { useEffect, useState } from "react";
import PopUp from "./PopUp";
import { Redirect } from "react-router-dom";
import SpellSlotInputs from "./SpellSlotInputs";
import axios from "axios";
import AuthService from "../services/AuthService";
import "../styles/PlayerForm.css"