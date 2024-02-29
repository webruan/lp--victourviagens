<?php
    $pixel_id = "4355715007878986";
    $access_token = "EABIqVbLaYWwBAIOGud3fZCAKPNX1de83NdIoDzUj9STX87VPZCpmC3OnFkrkLCXFvKySFtOmKIjpr1tGb2g8iRXh1JZCQCKFkYO5G89IhKmC9BmHrsIZAVTm8XDNjZCjopZADsezMqGDRd1Vrovy5t8roCZAXj9gZAF9MYpkVwBPZBZBZAigXMN2QTW27po0swlSZAEZD";

    $url = "https://graph.facebook.com/v12.0/" . $pixel_id . "/events";

    $data = array(
        'data' => array(
            array(
                'event_name' => 'Purchase',
                'event_time' => 1681662184,
                'user_data' => array(
                    'em' => '7b17fb0bd173f625b58636fb796407c22b3d16fc78302d79f0fd30c2fc2fc068'
                ),
                'custom_data' => array(
                    'currency' => 'BRL',
                    'value' => 100.00
                )
            )
        ),
        'access_token' => $access_token
    );

    $options = array(
        'http' => array(
            'header' => "Content-type: application/json\r\n",
            'method' => 'POST',
            'content' => json_encode($data)
        )
    );

    $context = stream_context_create($options);
    $result = file_get_contents($url, false, $context);

?>
