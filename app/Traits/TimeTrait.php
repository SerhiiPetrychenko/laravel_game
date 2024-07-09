<?php

namespace App\Traits;

use Carbon\Carbon;

/**
 * TimeTrait class
 *
 * @package App\Traits
 */
trait TimeTrait
{
    /**
     * Current time to ISO 8601 string
     */
    public static function currentTimeToISO(): string
    {
        return Carbon::now()->setTimezone('UTC')->toIso8601String();
    }

    /**
     * Time to ISO in UTC
     */
    public static function timeToISOUTC($time): string
    {
        return Carbon::parse($time)->setTimezone('UTC')->toIso8601String();
    }

    /**
     * Set time to selected timezone and UTC
     */
    public static function timeToTimezoneToISO($time, $offset): string
    {
        $time = Carbon::parse($time)->format('Y-m-d H:i:s');
        $date_gmt = \Illuminate\Support\Carbon::createFromFormat('Y-m-d H:i:s', $time, $offset)->toIso8601String();
        return self::timeToISOUTC($date_gmt);
    }

    /**
     * Duration minutes
     *
     * @param string|Carbon $end_time
     * @param $start_time
     *
     * @return int
     */
    public static function durationMinutes($end_time, $start_time): int
    {
        if (is_string($end_time)) {
            return Carbon::parse($end_time)->diffInMinutes($start_time);
        }
        return $end_time->diffInMinutes($start_time);
    }

    /**
     * Duration minutes
     *
     * @param string|Carbon $end_time
     * @param $start_time
     *
     * @return int
     */
    public static function durationSeconds($end_time, $start_time): int
    {
        if (is_string($end_time)) {
            return Carbon::parse($end_time)->diffInSeconds($start_time);
        }
        return $end_time->diffInSeconds($start_time);
    }

    /**
     * Duration days
     *
     * @param string|Carbon $end_time
     * @param $start_time
     *
     * @return int
     */
    public static function durationDays($end_time, $start_time): int
    {
        if (is_string($end_time)) {
            $hours = Carbon::parse($end_time)->diffInHours($start_time);
        } else {
            $hours = $end_time->diffInHours($start_time);
        }
        return ceil($hours/24);
    }

    /**
     * Days left
     *
     * @param string|Carbon $end_time
     *
     * @return int
     */
    public static function dayLeft($end_time): int
    {
        $current_time = Carbon::now()->setTimezone('UTC');
        if ($current_time > $end_time) {
            return 0;
        }
        return self::durationDays($end_time, $current_time);
    }

    /**
     * Current time to timestamp
     */
    public static function currentTimeToTimestamp()
    {
        return Carbon::now()->setTimezone('UTC')->timestamp;
    }

    /**
     * Time iso to timestamp
     */
    public function timeToTimestamp($time)
    {
        return Carbon::parse($time)->timestamp;
    }
}
