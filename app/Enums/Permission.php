<?php

namespace App\Enums;

enum Permission: string 
{
    case CAN_READ_GROUPS = "can_view_groups";
    case CAN_READ_GROUP = "can_view_group";
}