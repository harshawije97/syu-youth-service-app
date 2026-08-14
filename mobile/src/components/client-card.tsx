type CardProps = {
  id: string;
  fullName: string;
  contactNo: string;
  division: string;
  isAttended: boolean;
  timestamp: string;
};

import { View, Text } from "react-native";
import React from "react";
import { colors, globalStyles } from "@/styles/global";
import { IconCircleCheck, IconClock, IconMapPin, IconPhone } from "@tabler/icons-react-native";

const Card = ({
  id,
  fullName,
  contactNo,
  division,
  isAttended,
  timestamp,
}: CardProps) => {
  const statusColor = isAttended ? colors.primary : colors.alert;
  return (
     <View style={[globalStyles.card, { borderLeftColor: statusColor }]}>
      <View style={globalStyles.headerRow}>
        <Text style={globalStyles.name} numberOfLines={1}>
          {fullName}
        </Text>
 
        <View style={[globalStyles.badge, { backgroundColor: statusColor + "1A" }]}>
          <IconCircleCheck size={14} color={statusColor} />
          <Text style={[globalStyles.badgeText, { color: statusColor }]}>
            {isAttended ? "Attended" : "Pending"}
          </Text>
        </View>
      </View>
 
      <View style={globalStyles.row}>
        <IconMapPin size={14} color={colors.textSecondary} />
        <Text style={globalStyles.rowText}>{division}</Text>
      </View>
 
      <View style={globalStyles.row}>
        <IconPhone size={14} color={colors.textSecondary} />
        <Text style={globalStyles.rowText}>{contactNo}</Text>
      </View>
 
      <View style={globalStyles.footerRow}>
        <IconClock size={12} color={colors.textSecondary} />
        <Text style={globalStyles.timestamp}>{timestamp}</Text>
      </View>
    </View>
  );
};

export default Card;
