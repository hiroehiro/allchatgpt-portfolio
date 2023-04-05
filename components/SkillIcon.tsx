import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { Box, Typography } from "@mui/material";

interface SkillIconProps {
  icon: IconDefinition;
  proficiency: number;
}

const SkillIcon = ({ icon, proficiency }: SkillIconProps) => {
  return (
    <Box sx={{ textAlign: "center" }}>
      <FontAwesomeIcon icon={icon} size="3x" />
      <Typography variant="subtitle1" sx={{ mt: 1 }}>
        習熟度: {proficiency} / 5
      </Typography>
    </Box>
  );
};

export default SkillIcon;
